<?php

namespace App\Http\Resources;

use App\Models\Kategorija;
use App\Models\Vrsta;
use Illuminate\Http\Resources\Json\JsonResource;

class PiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'proizvodjac' => $this->resource->proizvodjac,
            'zemlja_porekla' => $this->resource->zemlja_porekla,

            'cena' => $this->resource->cena,
            'kolicina' => $this->resource->kolicina,
            'vrsta' => new VrstaResource(Vrsta::find($this->resource->vrsta)),
            'image' => $this->resource->image,
           
        

            
 
        ];
    }
}
