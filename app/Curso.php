<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $table = 'cursos';		
    protected $fillable = [	
    	'ccurso',	
        'wcurso'
    ];

    // ********** RELATIONSHIP **********/

    public function dcurso()
    {
        return $this->hasMany('App\DCurso');
    }
    	
    public function cursogrupo()
    {
        /* return $this->belongsTo('App\User', 'foreign_key'); */
        return $this->hasMany('App\CursoGrupo');
    }

}
