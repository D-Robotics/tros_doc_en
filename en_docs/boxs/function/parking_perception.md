---
sidebar_position: 8
---
# Road Structuring

## Function Introduction

The parking_perception package is a road structuring algorithm based on hobot_dnn package, which uses BPU for model inference to obtain algorithm inference results.
This package supports subscribing to topics of type sensors/msg/image directly, and supports inferring from local images. The algorithm information will be published through topics and the results will be rendered and visualized on the web page. It also supports saving the rendered images in the result directory during program execution.

The supported object detection categories are as follows:

| Category      | Description |
| ------------- | ----------- |
| cyclist       | Cyclist     |
| person        | Pedestrian  |
| rear          | Rear        |
| vehicle       | Vehicle     |
| parking_lock  | Parking lock|

The supported semantic segmentation categories are as follows:
 
| Category         | Description |
| ---------------- | ----------- |
| road             | Road        |
| background       | Background  |
| lane_marking     | Lane marking|
| sign_line        | Sign line   |
| parking_lane     | Parking lane|
| parking_space    | Parking space|
| parking_rod      | Parking rod |
| parking_lock     | Parking lock|

Code repository: <https://github.com/HorizonRDK/parking_perception.git>

Application scenario: The outdoor parking area detection algorithm is based on semantic segmentation, which identifies parking areas in the images and can achieve automatic parking. It is mainly used in the field of autonomous driving.

Car parking space search case: [4.8. Car Parking Space Search](../../apps/parking_search)

## Supported Platforms

| Platform             | Operating System | Example Function                                            |
| -------------------- | ---------------- | ------------------------------------------------------------|
| RDK X3, RDK X3 Module| Ubuntu 20.04     | · Start MIPI/USB camera/local image replay, inference rendering results displayed/saved locally on the Web| 
| X86                  | Ubuntu 20.04     | · Start local image replay, inference rendering results displayed/saved locally on the Web|

## Preparation

### Horizon RDK Platform1. The Horizon RDK has burned the Ubuntu 20.04 system image provided by Horizon.

2. The Horizon RDK has successfully installed TogetheROS.Bot.

### X86 Platform

1. The X86 environment has been configured with the Ubuntu 20.04 system image.

2. The X86 environment has successfully installed tros.b.

## User Manual

The package publishes algorithm messages that include semantic segmentation and object detection information, and users can subscribe to these messages for application development.

### Horizon RDK Platform

**Publishing images from MIPI camera**

```shell
# Set up ROS2 environment
source /opt/tros/setup.bash

# Copy the required configuration files from the installation path of tros.b
cp -r /opt/tros/lib/parking_perception/config/ .

# Configure MIPI camera
export CAM_TYPE=mipi

# Launch the launch file
ros2 launch parking_perception parking_perception.launch.py 
```

**Publishing images from USB camera**

```shell
# Set up ROS2 environment
source /opt/tros/setup.bash

# Copy the required configuration files from the installation path of tros
cp -r /opt/tros/lib/parking_perception/config/ .

# Configure USB camera
export CAM_TYPE=usb

# Launch the launch file
ros2 launch parking_perception parking_perception.launch.py 
```

**Using a single image for reprocessing**# Configuring ROS2 environment
source /opt/tros/setup.bash

# Copying the required configuration files for running the example from the installation path of tros.
cp -r /opt/tros/lib/parking_perception/config/ .

# Configuring the image for feedback
export CAM_TYPE=fb

# Launching the launch file
ros2 launch parking_perception parking_perception.launch.py 
```

### X86 Platform

**Using a single feedback image**

```shell
# Configuring ROS2 environment
source /opt/tros/setup.bash

# Copying the required configuration files for running the example from the installation path of tros.
cp -r /opt/tros/lib/parking_perception/config/ .

# Configuring the image for feedback
export CAM_TYPE=fb

# Launching the launch file
ros2 launch parking_perception parking_perception.launch.py 
```

## Result Analysis

**Using a MIPI camera to publish images**

After the package is initialized, the following information will be displayed in the terminal:

```
[INFO] [launch]: All log files can be found below /root/.ros/log/2022-08-02-06-46-55-605266-ubuntu-3669
[INFO] [launch]: Default logging verbosity is set to INFO
[INFO] [mipi_cam-1]: process started with pid [3671]
[INFO] [hobot_codec_republish-2]: process started with pid [3673]
[INFO] [parking_perception-3]: process started with pid [3675]
[INFO] [websocket-4]: process started with pid [3677]
[parking_perception-3] [WARN] [1659394017.194211788] [parking_perception]: Parameter:
[parking_perception-3] shared_men:1
[parking_perception-3]  is_sync_mode_: 1
[parking_perception-3]  model_file_name_: config/parking_perception_640x320.bin
[parking_perception-3] feed_image:
```
[parking_perception-3] [INFO] [1659394017.194695288] [dnn]: Node init.
[parking_perception-3] [INFO] [1659394017.194784038] [parking_perception]: Set node para.
[parking_perception-3] [INFO] [1659394017.194845413] [dnn]: Model init.
[parking_perception-3] [BPU_PLAT]BPU Platform Version(1.3.1)!
[parking_perception-3] [C][3675][08-02][06:46:57:202][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11
[parking_perception-3] [HBRT] set log level as 0. version = 3.14.5
[parking_perception-3] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)
[parking_perception-3] [INFO] [1659394017.247423580] [dnn]: The model input 0 width is 640 and height is 320
[parking_perception-3] [INFO] [1659394017.247664997] [dnn]: Task init.
[parking_perception-3] [INFO] [1659394017.255848788] [dnn]: Set task_num [2]
[parking_perception-3] [INFO] [1659394017.255999663] [parking_perception]: The model input width is 640 and height is 320
[parking_perception-3] [INFO] [1659394017.263431163] [parking_perception]: msg_pub_topic_name: ai_msg_parking_perception
[parking_perception-3] [INFO] [1659394017.263554788] [parking_perception]: Detect images that use subscriptions
[parking_perception-3] [WARN] [1659394017.263597997] [parking_perception]: Create hbmem_subscription with topic_name: /hbmem_img
[parking_perception-3] [WARN] [1659394017.267204163] [parking_perception]: start success!!!
[parking_perception-3] [WARN] [1662036456.219133588] [parking_perception]: input fps: 29.73, out fps: 29.79
[parking_perception-3] [WARN] [1662036457.228303881] [parking_perception]: input fps: 29.73, out fps: 29.73
[parking_perception-3] [WARN] [1662036458.237841548] [parking_perception]: input fps: 29.73, out fps: 29.73
**Using single re-injection image**

The result of inference reading a local image in the example will be rendered on the image. On the PC-side browser, you can view the image and algorithm rendering effect by entering http://IP:8000 (IP is the IP address of the Horizon RDK), and open the settings in the upper right corner of the interface.

![](./image/box_adv/operation_1.png)

Select the "Full Image Segmentation" option to display the rendering effect.

![](./image/box_adv/operation_2.png)

From the visualization result, we can see that the parking area and driving area in the outdoor scene are effectively segmented, distinguishing the parking lane from the driving lane, and the object detection task also locates the vehicles in the distance.

![](./image/box_adv/render.png)

When "dump_render_img" is set to "1", the rendering effect will be saved in the "result" directory at the current path.