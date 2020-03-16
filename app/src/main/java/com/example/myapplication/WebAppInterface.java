package com.example.myapplication;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

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
    public void getScreenFromScript(String screen){

    }
}
