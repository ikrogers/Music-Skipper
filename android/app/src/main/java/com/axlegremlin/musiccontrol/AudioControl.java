package com.axlegremlin.musiccontrol;

import android.media.AudioManager;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class  AudioControl extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  AudioControl(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
  @Override
  public String getName() {
    return "AudioControl";
  }

  @ReactMethod
  public void sendCommand(String action) {
    AudioManager mAudioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
    

    if(mAudioManager.isMusicActive()) {
        Intent i = new Intent("com.android.music.musicservicecommand");
        i.putExtra("command" , action);
                //probably going to break
        reactContext.sendBroadcast(i);
        Log.d("NativeCODE", "hit sendCommand method");}
  }








}