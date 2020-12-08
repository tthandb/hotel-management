import axios from "axios"

const api = {
  getReservation: (id) => {
    return axios
        .all([
          axios.get("/reservation/" + id),
          axios.get("/reservationRoom/" + id),
        ])
        .then(
            axios.spread((resCust, resRooms) => ({
              resCust: resCust.data,
              resRooms: resRooms.data,
            }))
        )
  },
  createReservation: (data) => {
    return axios
        .post("/reservation", {
          cust: [
            data.firstname,
            data.lastname,
            data.address,
            data.city,
            data.country,
            data.email,
            data.phone,
          ],
          reserve: [data.user_id, ""],
          rooms: [
            [
              data.roomtype,
              data.arrivaldate,
              data.departuredate,
              data.adults,
              data.rate,
              data.comments,
            ],
          ],
        })
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  updateReservation: (data) => {
    return axios
        .put("/reservation", {
          cust: [
            data.firstname,
            data.lastname,
            data.address,
            data.city,
            data.country,
            data.email,
            data.phone,
            data.customerId,
          ],
          reserve: [data.user_id, "", data.reservation_id],
          rooms: [
            [
              data.roomtype,
              data.arrivaldate,
              data.departuredate,
              data.adults,
              data.rate,
              data.comments,
              data.resRoomId,
            ],
          ],
        })
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  cancelReservation: (id) => {
    return axios
        .put(`/reservation/cancel/${id}`)
        .then(res => res)
        .catch(error =>
            console.log(error)
        )
  },
  getReservations: () => {
    return axios
        .get("/reservation")
        .then(res => res.data)
        .catch(error =>
            console.log(error)
        )
  },
  getSomeReservations: (data) => {
    const fname = data.firstname === "" ? "undefined" : data.firstname
    const lname = data.lastname === "" ? "undefined" : data.lastname
    const sdate = data.sdate === "" ? "undefined" : data.sdate
    const edate = data.edate === "" ? "undefined" : data.edate
    return axios
        .get(
            `/reservation/reservationList/${fname}/${lname}/${sdate}/${edate}`
        )
        .then(res => res.data)
        .catch((error) =>
            console.log(error)
        )
  },
  getRoomTypes: () => {
    return axios
        .get("/roomType")
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getArrivalsNew: (data, date) => {
    const sdate =
        data.startDateRange === "" ? "undefined" : data.startDateRange
    const fname = data.firstname === "" ? "undefined" : data.firstname
    const lname = data.lastname === "" ? "undefined" : data.lastname
    return axios
        .all([
          axios.get(`/reservationRoom/arrivals/${sdate}/${fname}/${lname}`),
          axios.get(`/room/arrivals/${date}`),
          axios.get(`/reservationRoom/pendingDepartures/${date}`),
        ])
        .then(
            axios.spread((arrivals, rooms_arrivals, pending_departures) => ({
              arrivals: arrivals.data,
              rooms_arrivals: rooms_arrivals.data,
              pending_departures: pending_departures.data,
            }))
        )
  },
  getArrivals: (data) => {
    const sdate =
        data.startDateRange === "" ? "undefined" : data.startDateRange
    const fname = data.firstname === "" ? "undefined" : data.firstname
    const lname = data.lastname === "" ? "undefined" : data.lastname
    return axios
        .get(`/reservationRoom/arrivals/${sdate}/${fname}/${lname}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getRoomsArrivals: (date) => {
    axios
        .get(`/room/arrivals/${date}`)
        .then(res => res.data)
        .catch((error) => console.log(error))
  },
  getDepartures: (data) => {
    const fname = data.firstname === "" ? "undefined" : data.firstname
    const lname = data.lastname === "" ? "undefined" : data.lastname
    const rnum = data.roomNumber === "" ? "undefined" : data.roomNumber
    const sover = data.stayOver
    const dout = data.dueOut
    const dpart = data.checkedOut
    return axios
        .get(
            `/reservationRoom/departures/${fname}/${lname}/${rnum}/${sover}/${dout}/${dpart}`
        )
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getGuests: (data) => {
    const fname = data.firstname === "" ? "undefined" : data.firstname
    const lname = data.lastname === "" ? "undefined" : data.lastname
    const rnum = data.roomNumber === "" ? "undefined" : data.roomNumber
    return axios
        .get(`/reservationRoom/guests/${fname}/${lname}/${rnum}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  updateRoomCheckin: (id, room_id) => {
    return axios
        .put(`/reservationRoom/checkinRoom/${id}/${room_id}`)
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  updateRoomCheckout: (id, room_num, payment_type) => {
    return axios
        .all([
          axios.put(`/reservationRoom/checkoutRoom/${id}/${room_num}`),
          axios.post("/invoice", {id: id, payment_type: payment_type}),
        ])
        .then(axios.spread((res1, res2) => [res1, res2]))
  },
  getPreInvoice: (id) => {
    return axios
        .get(`/invoice/preInvoice/${id}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getInvoice: (id) => {
    return axios
        .get(`/invoice/${id}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getInvoiceId: (id) => {
    return axios
        .get(`/invoice/invoiceId/${id}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  updateCleanStatus: (room_id, status) => {
    return axios
        .put(`/room/updateCleanStatus/${status}/${room_id}`)
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  getAvailableRooms: (date) => {
    return axios
        .all([
          axios.get("/roomType"),
          axios.get(`/roomType/available/${date}`),
        ])
        .then(
            axios.spread((roomTypes, typeData) => ({
              roomTypes: roomTypes.data,
              typeData: typeData.data[1],
            }))
        )
  },
  getHouseKeepingStatus: (checked) => {
    return axios
        .get(
            `/room/housekeepingStatus/${checked.clean}/${checked.dirty}/${checked.vacant}/${checked.occupied}/${checked.arrived}/${checked.stayOver}/${checked.dueOut}/${checked.departed}/${checked.notReserved}`
        )
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },

  getHotelInfo: (id) => {
    return axios
        .get(`/hotelInformation/${id}`)
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getRoomsIdNum: () => {
    return axios
        .get('/room/id')
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  getRoomIssues: () => {
    return axios
        .get('/roomIssue')
        .then(res => res.data)
        .catch((error) => {
          console.log(error)
        })
  },
  updateRoomIssues: (id, vals) => {
    return axios
        .put(`/roomIssue/${id}`, {vals})
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  updateRoomIssuesFixed: (id) => {
    return axios
        .put(`/roomIssue/fixed/${id}`)
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  createRoomIssue: (vals) => {
    return axios
        .post("/roomIssue", {vals})
        .then(res => res)
        .catch((error) => {
          console.log(error)
        })
  },
  getHouseStatus: (date) => {
    return axios
        .all([
          axios.get("/room/houseStatusRooms"),
          axios.get(`/reservationRoom/houseStatusReservationRooms/${date}`),
        ])
        .then(
            axios.spread((rooms, reservationRooms) => ({
              rooms: rooms.data,
              reservationRooms: reservationRooms.data,
            }))
        )
  },
}

export default api
