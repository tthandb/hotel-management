const room = require('../models/room')

module.exports = {
  getAllRooms: (req, res) => {
    room.selectAll(data => {
      res.json(data)
    })
  },
  createNewRoom: (req, res) => {
    room.insertOne(req.body.vals, result => {
      res.json({id: result.insertId})
    })
  },
  getRoomById: (req, res) => {
    room.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateRoomById: (req, res) => {
    room.updateOne(req.body.vals, req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  deleteRoomById: (req, res) => {
    room.deleteOne(req.params.id, data => {
      res.json(data)
    })
  },
  getAllRoomIds: (req, res) => {
    room.selectAllIdNum(data => {
      res.json(data)
    })
  },
  getRoomsArrivals: (req, res) => {
    room.selectAllShort(req.params.date, result => {
      res.json(result)
    })
  },
  getHouseKeepingStatus: (req, res) => {
    const {dirty, dueOut, occupied, notReserved, vacant, arrived, departed, stayOver, clean} = req.params;
    const conditions = []
    let c1
    if (clean === 'true' && dirty === 'false') {
      c1 = 'rm.clean=1'
    } else if (clean === 'false' && dirty === 'true') {
      c1 = 'rm.clean=0'
    } else {
      c1 = '(rm.clean=1 || rm.clean=0)'
    }
    conditions.push(c1)
    let c3
    if (vacant === 'true' && occupied === 'false') {
      c3 = 'rm.occupied=0'
    } else if (
        vacant === 'false' &&
        occupied === 'true'
    ) {
      c3 = 'rm.occupied=1'
    } else {
      c3 = '(rm.occupied=1 || rm.occupied=0)'
    }
    conditions.push(c3)
    const criteria4 = []
    arrived === 'true' &&
    criteria4.push(
        '(checked_in=1 && check_in_date=CURDATE() && checked_out=0)'
    )
    departed === 'true' &&
    criteria4.push('check_out_date=CURDATE() && checked_out=1')
    stayOver === 'true' &&
    criteria4.push('(CURDATE()>check_in_date && CURDATE()<check_out_date)')
    dueOut === 'true' &&
    criteria4.push('(check_out_date=CURDATE() && checked_out=0)')
    notReserved === 'true' &&
    criteria4.push(
        '(check_in_date IS NULL || (CURDATE() NOT BETWEEN check_in_date AND check_out_date))'
    )
    if (criteria4.length > 0) {
      const c4 = '(' + criteria4.join(' || ') + ')'
      conditions.push(c4)
    }
    room.housekeepingStatus(conditions, data => {
      res.json(data)
    })
  },
  updateRoomCleanStatus: (req, res) => {
    const cond = [req.params.status, req.params.room_id]
    room.updateClean(cond, result => {
      res.json(result)
    })
  },
  getHouseStatusRooms: (req, res) => {
    room.selectForHouseStatus(data => {
      res.json(data)
    })
  }
}

