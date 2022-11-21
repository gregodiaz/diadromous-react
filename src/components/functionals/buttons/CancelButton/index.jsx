import React from 'react';

import { cancelTicket } from '../../../../services/TicketService';

export default function CancelButton({ travelId, refreshComponent }) {
  const handleCancel = async () => {
    if (window.confirm('Do you really want to cancel the ticket?')) {
      await cancelTicket(travelId)
      refreshComponent()
    }
  };

  return (
    <button className="btn btn-outline-danger" onClick={handleCancel}>
      Cancel
    </button>
  );
};

