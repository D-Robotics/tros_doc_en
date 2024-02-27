---
sidebar_position: 6
---

# 4.6 Voice-controlled Car Movement

## Function Introduction

The function of voice-controlled car movement allows users to control the robot's movement forward, backward, left, and right using voice commands. It needs to be used together with the smart voice module of the Horizon Robotics robot operating system. The process is as shown in the following diagram:

![](./image/car_audio_control/audio_control.jpg)

The app uses a virtual car in the PC-side Gazebo simulation environment as an example, but the control commands can also be directly used to control a physical car.

Code repository: <https://github.com/HorizonRDK/audio_control.git>

## Supported Platforms

| Platform | Running Method | Example Function                    |
| -------- | -------------- | ----------------------------------- |
| RDK X3   | Ubuntu 20.04   | Start smart voice module, parse voice information, and control the car in Gazebo |

**Note: Only RDK X3 is supported, RDK X3 Module is not supported.**

## Preparation

### Horizon RDK Platform

1. The Horizon RDK is flashed with the Ubuntu 20.04 image provided by Horizon.

2. TogetheROS.Bot has been successfully installed on the Horizon RDK.

3. The smart voice algorithm package has been successfully installed on the Horizon RDK. Installation command: `apt update; apt install tros-hobot-audio`.

4. The compatible audio board has been successfully connected to the Horizon RDK (refer to the [Smart Voice section](../boxs/box_adv#smart-voice) for more details).

5. The PC is on the same network (either wired or connected to the same Wi-Fi network) as the Horizon RDK. The PC-side environment package requirements include:

   - [ROS2 Foxy Desktop Full](https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html)
   - Gazebo and Turtlebot3 related packages. Installation commands:

   ```shell
   sudo apt-get install ros-foxy-gazebo-*
   sudo apt install ros-foxy-turtlebot3
   sudo apt install ros-foxy-turtlebot3-simulations
   ```

## User Guide

Start the simulation environment on the PC side:

```shell
source /opt/ros/foxy/setup.bash
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo empty_world.launch.py
```

After successful launch, the simulation environment shows the following effect of the car:

![](./image/car_audio_tracking/gazebo.jpeg)

Horizon RDK platform startup program:

1. Copy the audio configuration file

    ```shell
    # Copy the configuration file required for running the example from the installation path of tros.b.
    cp -r /opt/tros/lib/hobot_audio/config/ .
    ```

2. Check the microphone device

    The microphone device number is set in the configuration file *config/audio_config.json* with the `micphone_name` field. The default is "hw:0,0", which represents audio device Card0 Device0. The device number can be checked by the command `ls /dev/snd`, for example: "pcmC0D1c". The letter 'c' represents the capture device, 'C0' represents Card0, and 'D1' represents Device1. Modify the parameter to "hw:0,1".

3. Start the program

    ```shell
    # Configure the tros.b environment
    source /opt/tros/setup.bash

    # Start the launch file
    ros2 launch audio_control audio_control.launch.py
    ```

    After the program is successfully started, you can control the car's movement using commands such as "go forward", "go backward", "turn left", "turn right", and "stop".

## Result Analysis

The following information is output in the Horizon RDK running terminal:

```shell
        This is audio control package.

============================================
        audio control usage

Wake up device is "Hello Horizon".
Audio control command word definitions are:
        "go forward": move front.
        "go backward": move back.
```

The above log snippet captures the output from the audio control package after its launch. The log content indicates that the wake-up word configured for this voice control module is "Hello Horizon", and the command words for controlling the movement of the robot are: "move forward", "move backward", "rotate left", "rotate right".

On the PC side, you can use the `ros2 topic list` command in the terminal to query the topic information of the Horizon RDK:

```shell
$ ros2 topic list
/audio_smart
/cmd_vel
```

Among them, `/audio_smart` is the topic published by X3 that contains the algorithm message for intelligent voice results, and `/cmd_vel` is the topic published by Horizon RDK for motion control commands.

On the PC side, you can use the `ros2 topic echo /cmd_vel` command in the terminal to view the motion control commands published by Horizon RDK:

```shell
linear:
  x: 0.30000001192092896
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0
---
linear:
  x: 0.0
  y: -0.30000001192092896
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: -0.5
---
linear:
  x: 0.0
  y: 0.30000001192092896
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.5
---
```

The simulation car on the PC follows the instructions of voice control commands to move. The motion effect of the simulated car is as follows:

![](./image/car_audio_control/move.gif)