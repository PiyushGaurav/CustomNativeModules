package com.nativemodules;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createCalendarEventCallback(String name, String location, Callback callBack) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        Integer eventId = 777;
        callBack.invoke(eventId);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createCalendarEventErrorCallback(String name, String location, Callback callBack) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        Integer eventId = 333;
        callBack.invoke(null, eventId);
    }

    @ReactMethod
    public void createCalendarEventPromise(String name, String location, Promise promise) {
        try {
            Integer eventId = 999;
            promise.resolve(eventId);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}