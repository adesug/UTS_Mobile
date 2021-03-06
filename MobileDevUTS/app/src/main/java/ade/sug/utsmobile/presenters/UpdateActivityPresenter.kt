package ade.sug.utsmobile.presenters

import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import ade.sug.utsmobile.contracts.BarangActivityContract
import ade.sug.utsmobile.models.Barang
import ade.sug.utsmobile.webservices.Api
import ade.sug.utsmobile.webservices.WrappedResponse

class UpdateActivityPresenter(v:BarangActivityContract.ViewEdit):BarangActivityContract.InteractionUpdate {
    private var view : BarangActivityContract.ViewEdit? = v
    private var api = Api.instance()
    override fun validate(name: String, location: String, description: String): Boolean {
        return true
    }

    override fun update(
        id: Int,
        token: String,
        name: String,
        location: String,
        description: String
    ) {
        val requestUpdate = api.updateData(id, token, name, location, description)
        requestUpdate.enqueue(object : Callback<WrappedResponse<Barang>>{
            override fun onFailure(call: Call<WrappedResponse<Barang>>, t: Throwable) {
                view?.toast("Koneksi tidak bisa")
            }
            override fun onResponse(
                call: Call<WrappedResponse<Barang>>,
                response: Response<WrappedResponse<Barang>>
            ) {
                if(response.isSuccessful){
                    val body = response.body()
                    if(body != null && body.status){
                        view?.success("Berhasil")
                    }
                }else{
                    view?.toast("Ada yang tidak beres, coba lagi nanti, atau hubungi admin")
                }
                view?.isLoading(false)            }
        })
    }

    override fun destroy() {
        view = null
    }

}