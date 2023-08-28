export const SITE_URL = process.env.SITE_URL || 'https://www.boa.bo/';
export const Selectors = {
    HomePage: {
      flightBooking: '#reserva_vuelos',
      originInput: '#select_desde.origen-destino',
      destinationInput: '#select_hasta.origen-destino',
      onlyOneWay: '#rbtn_ida.radio-button',
      calendar: "[id='picker_salida']",
      dateInput: 'a:has-text("30")',
      searchButton: '#btn_buscar_vuelos',
    },
    ChoosingFlight: {
      chosenFlight: '#vuelosIda_1 .desc_familias',
      chosenTicket: 'div.cajaFamilia',
      confirmTicket: '//div[2]/div[1]/div[3]//table[4]//tr//div',
    },
    BookingPage: {
      name: '#tbx_px1_nombres',
      lastName: '#tbx_px1_apellidos',
      emailInput: '#tbx_px1_email',
      phone: '#tbx_px1_telefono',
      documentType: '#select_px1_tipo_documento',
      documentId: '#tbx_px1_documento',
      bookButton: '//div[2]/div[1]/div[4]/div/table//tr//div',
      confirmationMessage: '#lbl_codigo_reserva',
    },
  };
  