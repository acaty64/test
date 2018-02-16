@extends('layouts.app')
@section('title','Vista de Prueba')
@section('content')
    <div class="container">
    	<p>Academind</p>
    	<p>https://www.youtube.com/watch?v=iw1eajzWQAM&index=2&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo</p>
    	<p>GETTERS | VueJS 2 & Vuex | Learning the Basics</p>
	</div>
    <div class="container">

		<App id="appRegister"></App>
		<br>
		<dcurso-component id="appDcurso"><dcurso-component/>
			
	</div>
@endsection

@section('view','help.blade.php')
