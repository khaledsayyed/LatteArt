# LatteArt

Android SDK tools

Download, the command line tools, for example: sdk-tools-linux-3859397.zip and follow:

unzip sdk-tools-linux-3859397.zip -d android_sdk
cd android_sdk/tools/bin

chmod a+x sdkmanager avdmanager
./sdkmanager "platforms;android-21"
./sdkmanager --update
Now you must have android_sdk/platforms/android-21 in your system, take note about android_sdk absolute path.

Crystax NDK

We are using Python3, so, we need Crystax NDK and NOT the official. [python-for-android now supports Python 3

APKs]. Download it and take note about their absolute path.

Python-for-Android

We need the last release of Python-for-android

git clone kivy/python-for-android
cd python-for-android
sudo python http://setup.py install
We need install the main python module, just with:

`pip install djangoforandroid
Configuration

Installed apps

Add djangoforandroid.builder to your INSTALLED_APPS setting.

INSTALLED_APPS = (
...
'djangoforandroid.builder',
'djangoforandroid.mdl', #optional, for mdl support
'djangoforandroid.d4a', #optional, for urls support
)
If you want use Material Design Lite in your app then you would like add djangoforandroid.mdl to IN-

STALLED_APPS apps and follow this tutorial.

Static files

Django for Android must run internally the collectstatic command, STATIC_ROOT must be defined.

STATIC_ROOT = os.path.join(BASE_DIR, 'apk')```
Remember add your statics files too.

STATICFILES_DIRS = [
os.path.join(BASE_DIR, "static"),
]
