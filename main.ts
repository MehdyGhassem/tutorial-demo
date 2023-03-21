let Avoiding = 0
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
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
}
function avoidance_function () {
    Avoiding = 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(100)
    hard_right()
    while (Avoiding == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
            soft_right()
        } else {
            soft_left()
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            Avoiding = 0
            hard_right()
        }
    }
}
function hard_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    basic.pause(100)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        avoidance_function()
    }
    LFSL += maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    LFSR += maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (LFSL == 1 && LFSR == 1) {
        all_ahead()
    } else if (LFSL == 1) {
        soft_right()
    } else if (LFSR == 1) {
        soft_right()
    } else {
        all_ahead()
    }
})
