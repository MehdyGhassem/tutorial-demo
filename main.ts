let LFSL = 0
let LFSR = 0
function soft_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
}
function all_ahead () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
}
function hard_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 60)
    basic.pause(100)
}
function soft_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}
function hard_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    basic.pause(100)
}
basic.forever(function () {
    LFSL += maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    LFSR += maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (LFSL == 1 && LFSR == 1) {
        all_ahead()
    } else if (LFSL == 1) {
        soft_right()
    } else if (LFSR == 1) {
        soft_right()
    } else {
    	
    }
})
