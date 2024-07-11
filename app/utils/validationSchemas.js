import Joi from 'joi';



export const userSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&.])[A-Za-z\\d$@$!%*?&.]{8,20}'))
    .required()
    .min(8),
  birth_date: Joi.date().iso().required(),
  discord_username: Joi.string().required(),
  city: Joi.string().required(),
});


export const rateSchema = Joi.object({
  note: Joi.number().integer().min(1).max(5).required(),
  description: Joi.string().required(),
  sender_user_id: Joi.number().integer().required(),
  receiver_profil_id: Joi.number().integer().required(),
});

export const profilSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  rank: Joi.string().required(),
  level: Joi.number().integer().required(),
  game_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
});

export const postSchema = Joi.object({
  title: Joi.string().required(),
  platform: Joi.string().required(),
  description: Joi.string().required(),
  schedule_start: Joi.date().iso().required(),
  schedule_end: Joi.date().iso().required(),
  profil_id: Joi.number().integer().required(),
  game_id: Joi.number().integer().required(),
  status: Joi.boolean().required(),
});

export const gameSchema = Joi.object({
  name: Joi.string().required(),
  pegi: Joi.number().integer().required(),
  category: Joi.number().integer().required(),
  description: Joi.string().required(),
});
