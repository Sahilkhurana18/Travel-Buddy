import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
  return (
      <div>
          <h2 className='font-bold text-lg'>Places to Visit</h2>
          <div>
              {trip.tripData?.itinerary &&
                  Object.keys(trip.tripData.itinerary)
                      .sort((a, b) => Number(a.replace("day", "")) - Number(b.replace("day", ""))) // Sort days numerically
                      .map((dayKey, index) => {
                          const dayData = trip.tripData.itinerary[dayKey]; // Get data for the current day

                          return (
                              <div key={index}>
                                  {/* Display Day */}
                                  <h2 className="font-bold text-lg">Day {dayKey.replace("day", "")}</h2>

                                  {/* Display Plans for this Day */}
                                  <ul className='grid md:grid-cols-2 gap-5 mt-5'>
                                      {dayData.plan?.map((planItem, i) => (
                                        <div className=''>
                                            <PlaceCardItem place={planItem}/>
                                          <li key={i} className=" font-medium text-sm">
                                              
                                              
                                              <h2 className='font-medium text-sm text-orange-500'>
                                              Best Time to Visit---{planItem.bestTimeToVisit}
                                              </h2>
                                          </li>
                                        </div>
                                      ))}
                                      
                                  </ul>
                              </div>
                          );
                      })}
          </div>



      </div>
  )
}

export default PlacesToVisit