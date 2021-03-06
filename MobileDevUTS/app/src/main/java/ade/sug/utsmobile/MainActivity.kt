package ade.sug.utsmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import ade.sug.utsmobile.utilities.Utils

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Logout()
        view()
        create()

    }

    private fun Logout(){
        logout.setOnClickListener {
            startActivity(Intent(this,LoginActivity::class.java)).also {
                Utils.clearToken(this)
                finish()
            }
        }
    }
    private fun view(){
        barang.setOnClickListener {
            startActivity(Intent(this,BarangActivity::class.java))
        }
    }
    private fun create(){
        setting.setOnClickListener {
            startActivity(Intent(this,SettingActivity::class.java))
        }
    }
}