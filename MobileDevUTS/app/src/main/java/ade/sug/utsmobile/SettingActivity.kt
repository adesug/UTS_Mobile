package ade.sug.utsmobile

import ade.sug.utsmobile.adapters.BarangAdapter
import ade.sug.utsmobile.contracts.BarangActivityContract
import ade.sug.utsmobile.models.Barang
import ade.sug.utsmobile.presenters.BarangActivityPresenter
import ade.sug.utsmobile.utilities.Utils
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_setting.*

class SettingActivity : AppCompatActivity(),BarangActivityContract.View {
    private var presenter = BarangActivityPresenter(this)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_setting)
        presenter = BarangActivityPresenter(this)
    }

    override fun attachToRecycle(barang: List<Barang>) {
        rvBarang.apply {
            layoutManager =  LinearLayoutManager(this@SettingActivity)
            adapter = BarangAdapter(barang,this@SettingActivity)
        }
        getData()
        create()
    }

    private fun create (){
        btnCreate.setOnClickListener { startActivity(Intent(this,CreateBarangActivity::class.java)).apply { finish() } }
    }

    override fun toast(message: String?) {
        Toast.makeText(this, message, Toast.LENGTH_LONG).show()
    }

    override fun isLoading(state: Boolean) {
        TODO("Not yet implemented")
    }

    override fun notConnect(message: String?) {
        TODO("Not yet implemented")
    }
    private fun getData(){
        Utils.getToken(this)?.let { presenter.allUser(it) }
    }

    override fun onResume() {
        super.onResume()
        getData()
    }
}