export default {
	getData(state){
		return function() {
console.log('getData');
				var URLdomain = window.location.host;
				var protocol = window.location.protocol;
				var url = protocol+'//'+URLdomain+'/api/dcurso/load/'
				var request ={
				  'facultad_id': this.$store.state.facultad_id,
				  'sede_id': this.$store.state.sede_id,
				  'docente_id': this.$store.state.docente_id,
				};
	
				axios.post(url, request).then(response=>{
				this.$store.state.grupos = response.data.data.grupos;
				this.$store.state.items = response.data.data.registration;
			//	this.sortWcurso(this.$store.items);
				this.$store.state.registrations = response.data.data.registrations;
				});
		}
	},

	grupos(state){
		return state.grupos;
	}
}