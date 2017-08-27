package com.example.vmac.chatbot;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.vmac.WatBot.R;

public class RegistroActivity extends AppCompatActivity {

    private Button button;
    private TextView textView;
    private EditText editText1, editText2, editText3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registro);

        button = (Button) findViewById(R.id.buttonRegister);
        textView = (TextView) findViewById(R.id.textView10);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String text= editText1.getText().toString();
                String text1= editText2.getText().toString();
                String text2= editText3.getText().toString();
                if(text.isEmpty()&&text1.isEmpty()&&text2.isEmpty()) {
                    Toast.makeText(RegistroActivity.this, "Debes de llenar todos los campos", Toast.LENGTH_SHORT).show();
                }else{
                    Intent intent = new Intent(RegistroActivity.this, SplashRegistroActivity.class);
                    startActivity(intent);
                }
            }
        });

        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(RegistroActivity.this, CodigoActivity.class);
                startActivity(intent);
            }
        });

        editText1 = (EditText) findViewById(R.id.editTextEmailRegis);
        editText2 = (EditText) findViewById(R.id.editTextNameRegis);
        editText3 = (EditText) findViewById(R.id.editTextUsernameRegis);




    }
}
