package com.example.vmac.chatbot;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.vmac.WatBot.R;

public class CodigoActivity extends AppCompatActivity {

    private EditText editText;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_codigo);

        editText = (EditText) findViewById(R.id.editText);
        button = (Button) findViewById(R.id.button2);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String codigo = editText.getText().toString();
                if(codigo.equalsIgnoreCase("1234")){
                    Toast.makeText(CodigoActivity.this, "Registro exitoso", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(CodigoActivity.this, MenuPrincipalActivity.class);
                    startActivity(intent);

                }else{
                    Toast.makeText(CodigoActivity.this, "El código de confirmación no es válido", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
