import { create } from 'zustand';
import api from '../api/axios';

const useRoomStore = create((set, get) => ({
    rooms: [],
    paramsFilter: {},
    loading: false,
    error: null,

    fetchRooms: async (data) => {
        set({ loading: true, error: null });
        try {
            const res = await api.post('choose-room', data);
            set({ rooms: res['data'],paramsFilter:data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    // addUser: async (newUser) => {
    //     try {
    //         const res = await api.post('/users', newUser);
    //         set({ users: [...get().users, res.data] });
    //     } catch (err) {
    //         set({ error: err.message });
    //     }
    // },

    // updateUser: async (id, updatedData) => {
    //     try {
    //         const res = await api.put(`/users/${id}`, updatedData);
    //         set({
    //             users: get().users.map((u) => (u.id === id ? res.data : u)),
    //         });
    //     } catch (err) {
    //         set({ error: err.message });
    //     }
    // },

    // deleteUser: async (id) => {
    //     try {
    //         await api.delete(`/users/${id}`);
    //         set({
    //             users: get().users.filter((u) => u.id !== id),
    //         });
    //     } catch (err) {
    //         set({ error: err.message });
    //     }
    // },
}));

export default useRoomStore;
