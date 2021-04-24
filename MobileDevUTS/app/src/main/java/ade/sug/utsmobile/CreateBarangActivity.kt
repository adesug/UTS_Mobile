package ade.sug.utsmobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.Toast
import cn.pedant.SweetAlert.SweetAlertDialog
import kotlinx.android.synthetic.main.activity_create_barang.*
import ade.sug.utsmobile.contracts.BarangActivityContract
import ade.sug.utsmobile.presenters.CreateActivityPresenter
import ade.sug.utsmobile.utilities.Utils

class CreateBarangActivity : AppCompatActivity(),BarangActivityContract.ViewCreate {
    private var presenter = CreateActivityPresenter(this)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_barang)
        presenter = CreateActivityPresenter(this)
        Save()
    }
    private fun Save(){
        btnSave.setOnClickListener{
            val token = Utils.getToken(this)
            val name = etName.text.toString().trim()
            val location  = etLocation.text.toString().trim()
            val description = etDescription.text.toString().trim()

            if(name.isNotEmpty() && location.isNotEmpty() && description.isNotEmpty()){
                token?.let { it -> presenter.save(it, name, location, description) }
            }else{
                toast("Isi Semua form")
            }
        }
    }
    override fun success(message: String?) {
        Toast.makeText(applicationContext, "Data Ditambahkan", Toast.LENGTH_SHORT).show()
        startActivity(Intent(this, SettingActivity::class.java))
        finish()
    }

    override fun toast(message: String?) {
        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }

    override fun isLoading(state: Boolean) {
        btnSave.isEnabled = !state
    }
}