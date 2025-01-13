/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Jan 2025
 * This program ...
*/

//setup
basic.showIcon(IconNames.Happy)
basic.clearScreen()

//When Button A is pressed
input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})

//When Button B is pressed
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
})
basic.showString("A = photo B = front-rear")
