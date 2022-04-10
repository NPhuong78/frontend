import axiosClient from "./axiosClient";


    
   export const getAll = async () => {
      const url = '/post/all';
      return await axiosClient.get(url);
    }

    export const getCenterPost = async () => {
      const url = '/post/center';
      return await axiosClient.get(url);
    }
    
    export const getSidePost= async() => {
      const url = '/post/side';
      return await axiosClient.get(url);
    }

    export const PaginationApi= async(currentPage:number) => {
      const url = `/post?page=${currentPage}`;
      return await axiosClient.get(url);
    }


    export const createPost= async () => {
      const url = '/post/create';
      return await axiosClient.post(url);
    }

    export const getPostId = async (id: any) => {
      const url = `/post/${id}`;
      return await axiosClient.get(url);
    }

    export const updatePost = async (id: any) => {
      const url = `/post/update/${id}`;
      return await axiosClient.put(url);
    }

    export const deletePost = async (id: any) => {
      const url = `/post/delete/${id}`;
      return await axiosClient.put(url);
    }




  
