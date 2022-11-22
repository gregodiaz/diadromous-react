import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTravels } from '../../../services/TravelService';

import BackButton from '../../functionals/buttons/BackButton';
import BuyButton from '../../functionals/buttons/BuyButton';
import DefaultTemplate from '../../presentionals/DefaultTemplate';
import LoadingSpinner from '../../presentionals/LoadingSpinner';
import NextButton from '../../functionals/buttons/NextButton';
import PrevButton from '../../functionals/buttons/PrevButton';
import { CardHeader, CardBodyLi } from './style';

export default function TravelDetail() {
  const params = useParams()

  const [error, setError] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [travel, setTravel] = useState()

  const getTravelDetail = async () => {
    setIsLoaded(false);
    const response = await getTravels(params.id)

    if (response.error) return setError(response.error.message);
    if (response.status >= 400) return setError(response.statusText);

    setTravel(response);
    setIsLoaded(true);
  };

  const validationMessage = validation =>
    validation ?
      'The travel is validated.' :
      'The travel is NOT validated, it is canceled due to weather conditions.';

  useEffect(() => {
    getTravelDetail()
  }, [params.id]);

  return (
    <DefaultTemplate>
      <div className='container-fluid w-auto m-5'>
        {
          !isLoaded ?
            error ?
              <div className='container border rounded border-danger text-danger h-1 my-2 p-3'>
                {error}
              </div> :
              <LoadingSpinner />
            :

            <div className="card bg-dark text-white">
              <CardHeader
                departure={travel.cities[0].name}
                arrival={travel.cities[1].name}
                id={travel.id}
              />

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <CardBodyLi
                    leftTitle={travel.cities[0].type_name}
                    leftText={`${travel.departure_date} - ${travel.cities[0].name}`}
                    rightTitle={'Price'}
                    rightText={`$ ${travel.price}`}
                  />

                  <CardBodyLi
                    leftTitle={travel.cities[1].type_name}
                    leftText={`${travel.arrival_date} - ${travel.cities[1].name}`}
                    rightTitle={'Tickets [Remaining/Total]'}
                    rightText={`${travel.available_passengers}/${travel.total_passengers}`}
                  />

                  <CardBodyLi
                    leftTitle={'Validation'}
                    leftText={
                      typeof (travel.validation) === 'boolean' ?
                        validationMessage(travel.validation) :
                        Object.keys(travel.validation).map(date =>
                          <div key={date}>{date} - {travel.validation[date]}%</div>
                        )
                    }
                  />

                  <li className="list-group-item bg-dark text-white">
                    <div className="container d-flex justify-content-between">
                      <BackButton />
                      <PrevButton />
                      <NextButton />
                      <BuyButton
                        travelId={travel.id}
                        availablePassengers={travel.available_passengers}
                        refreshComponent={getTravelDetail}
                      />
                    </div>
                  </li>

                </ul>
              </div>
            </div>
        }
      </div>
    </DefaultTemplate >
  );
};

