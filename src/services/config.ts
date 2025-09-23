import {
    addBaseConfig,
    AddBaseConfigParams,
    deleteBaseConfig,
    editBaseConfig,
    EditBaseConfigParams
} from "services/base_config";
import { ApiPath } from "utils/consts";


export const editWeightConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.WEIGHT_CONFIG);
export const addWeightConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.WEIGHT_CONFIG);
export const deleteWeightConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.WEIGHT_CONFIG);

export const editMaxWeightConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.MAX_WEIGHT_CONFIG);
export const addMaxWeightConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.MAX_WEIGHT_CONFIG);
export const deleteMaxWeightConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.MAX_WEIGHT_CONFIG);

export const editRepetitionsConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.REPETITIONS_CONFIG);
export const addRepetitionsConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.REPETITIONS_CONFIG);
export const deleteRepetitionsConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.REPETITIONS_CONFIG);

export const editMaxRepetitionsConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.MAX_REPS_CONFIG);
export const addMaxRepetitionsConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.MAX_REPS_CONFIG);
export const deleteMaxRepetitionsConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.MAX_REPS_CONFIG);

export const editNrOfSetsConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.NR_OF_SETS_CONFIG);
export const addNrOfSetsConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.NR_OF_SETS_CONFIG);
export const deleteNrOfSetsConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.NR_OF_SETS_CONFIG);

export const editMaxNrOfSetsConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.MAX_NR_OF_SETS_CONFIG);
export const addMaxNrOfSetsConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.MAX_NR_OF_SETS_CONFIG);
export const deleteMaxNrOfSetsConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.MAX_NR_OF_SETS_CONFIG);

export const editRirConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.RIR_CONFIG);
export const addRirConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.RIR_CONFIG);
export const deleteRirConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.RIR_CONFIG);

export const editMaxRirConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.MAX_RIR_CONFIG);
export const addMaxRirConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.MAX_RIR_CONFIG);
export const deleteMaxRirConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.MAX_RIR_CONFIG);

export const editRestConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.REST_CONFIG);
export const addRestConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.REST_CONFIG);
export const deleteRestConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.REST_CONFIG);

export const editMaxRestConfig = async (data: EditBaseConfigParams) => await editBaseConfig(data, ApiPath.MAX_REST_CONFIG);
export const addMaxRestConfig = async (data: AddBaseConfigParams) => await addBaseConfig(data, ApiPath.MAX_REST_CONFIG);
export const deleteMaxRestConfig = async (id: number) => await deleteBaseConfig(id, ApiPath.MAX_REST_CONFIG);

