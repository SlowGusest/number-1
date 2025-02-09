input.onLogoEvent(TouchButtonEvent.Touched, function () {
    record.startRecording(record.BlockingState.Blocking)
    basic.pause(100)
    record.playAudio(record.BlockingState.Blocking)
})
