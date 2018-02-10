export default {
    register(context, userId) {
        /** Viene de Registration.vue */
        context.commit('register', userId);
    }
}