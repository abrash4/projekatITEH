<?php

namespace App\Http\Controllers;

use App\Http\Resources\KorpaResource;
use App\Http\Resources\StavkaKorpeCollection;
use App\Models\Korpa;
use App\Models\Proizvod;
use App\Models\StavkaKorpe;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class KorpaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Korpa::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
        ]);
        
        if ($validator->fails()) 
            return response()->json($validator->errors()); 
        //ako ista korpa postoji ne treba nam 2 puta
        $korpa = Korpa::where('user_id', $request['user_id']);
        if($korpa){
            return response()->json(["Korpa vec postoji", $korpa ]);
        }else{

       
            $p = Korpa::create([
                    'user_id' =>   $request->user_id,  
            ]);
            return response()->json(["Korpa kreirana",new KorpaResource( $p)]);
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
 
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function edit(Korpa $korpa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Korpa $korpa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
       
    }
    
  
 
}
