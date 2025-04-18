import { createUserService, deleteUserService, getAllUsersService, updateUserService } from "../models/userModel.js";

const handlerResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};

export const createUser = async (req, res, next) => {
    const {name, email} = req.body;
    try {
        const newUser = await createUserService(name, email);
        handlerResponse(res, 201, "Usuário criado com sucesso", newUser);
    } catch(err){
        next(err);
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handlerResponse(res, 200, "Sucesso ao buscar usuários", users);
    } catch(err){
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await createUserService(req.params.id);

        if (!user) return handlerResponse(res, 404, "Usuário não encontrado", user)

        handlerResponse(res, 201, "Usuário encontrado com sucesso", newUser);
    } catch(err){
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const {name, email} = req.body;

    try {
        const updatedUser = await updateUserService(req.params.id, name, email);
        if (!updatedUser) return handlerResponse(res, 404, "Usuário não encontrado", updatedUser)
        handlerResponse(res, 200, "Usuário atualizado com sucesso!", updatedUser);
    } catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);
        if (!deletedUser) return handlerResponse(res, 404, "Usuário não encontrado", deletedUser)
        handlerResponse(res, 200, "Usuário deletado com sucesso!", deletedUser);
    } catch(err){
        next(err);
    }
}