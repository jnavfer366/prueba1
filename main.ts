basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 250)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 250)
    basic.pause(1000)
})
