package com.example.myapplication;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import org.json.JSONArray;

public class WebAppInterface {
    private Context context;
    public WebAppInterface(Context context){
                this.context =  context;
    }
    @JavascriptInterface
    public void showToast (String message){
        Toast.makeText(context,message,Toast.LENGTH_LONG).show();
    }

    @JavascriptInterface
    public  int[] numbers(){
        int[] A = {1,2,3};
        return A;
    }

    @JavascriptInterface
    public String getScreenFromScript(String screen){
        JSONArray screenJA = new JSONArray();
        try {
            switch (screen) {
                case "Mainscreen-state1":
                    screenJA.put("id1");
                    screenJA.put("id2");
                    screenJA.put("id3");
                    return screenJA.toString();
                case "Mainscreen-state2":
                    screenJA.put("id4");
                    screenJA.put("id5");
                    screenJA.put("id6");
                    return screenJA.toString();
                case "Mainscreen-state3":
                    screenJA.put("id7");
                    screenJA.put("id8");
                    screenJA.put("id9");
                    return screenJA.toString();
                default:
                    return null;
            }
        } catch (Exception e) {
            return null;
        }
    }
}
