
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from "@/components/ui/input"
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AiModel';
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,

} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function CreateTrip
  () {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();
  const handleInputChange = (name, value) => {

    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const login = useGoogleLogin({
    onSuccess: (tokenResp) => GetUserProfile(tokenResp),
    onError: (error) => console.error(error)

  })

  const OnGenerateTrip = async () => {

    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData?.traveller) {
      toast("Please fill all the details")

      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveller}', formData?.traveller)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays)


    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text())

  }

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString()
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    setLoading(false);
    navigate('/view-trip/'+docId)
  }
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }

    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      OnGenerateTrip();
    })

  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 w-screen'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences🏖️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location', v) }
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip for? </h2>
          <Input placeholder={'Ex.3'} type='number'
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />

        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
          <div className='grid grid-cols-3 font-medium'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border cursor-pointer
             rounded-lg hover:shadow-lg
             ${formData?.budget == item.title && 'shadow-lg border-black'}
             `}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
          <div className='grid grid-cols-3 font-medium'>
            {SelectTravelsList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('traveller', item.people)}
                className={`p-4 border cursor-pointer rounded-lg 
            hover:shadow-lg
            ${formData?.traveller == item.people && 'shadow-lg border-black'}
            `}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button
          disabled={loading}
          onClick={OnGenerateTrip}>
          {loading ?
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'
          }
        </Button>
      </div>


      <Dialog open={openDailog}>

        <DialogContent>
          <DialogHeader>

            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className='font-bold text-lg mt-7 text-gray-800'>Sign In With Google</h2>
              <p>Sign In to the App with Google Authentication securely</p>
              <Button

                onClick={login}
                className='w-full mt-5 flex gap-4 items-center'>

                <FcGoogle className='h-7 w-7' />
                Sign In With Google

              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>



    </div>




  )
}

export default CreateTrip
