import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    addMaxNrOfSetsConfig,
    addMaxRepetitionsConfig,
    addMaxRestConfig,
    addMaxRirConfig,
    addMaxWeightConfig,
    addNrOfSetsConfig,
    addRepetitionsConfig,
    addRestConfig,
    addRirConfig,
    addWeightConfig,
    deleteMaxNrOfSetsConfig,
    deleteMaxRepetitionsConfig,
    deleteMaxRestConfig,
    deleteMaxRirConfig,
    deleteMaxWeightConfig,
    deleteNrOfSetsConfig,
    deleteRepetitionsConfig,
    deleteRestConfig,
    deleteRirConfig,
    deleteWeightConfig,
    editMaxNrOfSetsConfig,
    editMaxRepetitionsConfig,
    editMaxRestConfig,
    editMaxRirConfig,
    editMaxWeightConfig,
    editNrOfSetsConfig,
    editRepetitionsConfig,
    editRestConfig,
    editRirConfig,
    editWeightConfig,
    processBaseConfigs
} from "services";
import { AddBaseConfigParams, EditBaseConfigParams, ProcessBaseConfigsParams } from "services/base_config";
import { QueryKey, } from "utils/consts";


export const useProcessConfigsQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: {
            values?: ProcessBaseConfigsParams,
            maxValues?: ProcessBaseConfigsParams
        }) => processBaseConfigs(data),
        onSuccess: () => queryClient.invalidateQueries({
                queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
            }
        )
    });
};


/*
 * Weight config
 */
export const useEditWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editWeightConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
                queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
            }
        )
    });
};
export const useAddWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addWeightConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteWeightConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};


/*
 * Max Weight config
 */
export const useEditMaxWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editMaxWeightConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddMaxWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addMaxWeightConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteMaxWeightConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMaxWeightConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Reps config
 */
export const useEditRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editRepetitionsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addRepetitionsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteRepetitionsConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Max Reps config
 */
export const useEditMaxRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editMaxRepetitionsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddMaxRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addMaxRepetitionsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteMaxRepsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMaxRepetitionsConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Nr of Sets config
 */
export const useEditNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editNrOfSetsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addNrOfSetsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteNrOfSetsConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Max Nr of Sets config
 */
export const useEditMaxNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editMaxNrOfSetsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddMaxNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addMaxNrOfSetsConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteMaxNrOfSetsConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMaxNrOfSetsConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * RiR
 */
export const useEditRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editRirConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addRirConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteRirConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useEditMaxRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editMaxRirConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddMaxRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addMaxRirConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteMaxRiRConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMaxRirConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Rest time config
 */
export const useEditRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editRestConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addRestConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteRestConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};

/*
 * Max Rest time config
 */
export const useEditMaxRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: EditBaseConfigParams) => editMaxRestConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useAddMaxRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: AddBaseConfigParams) => addMaxRestConfig(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};
export const useDeleteMaxRestConfigQuery = (routineId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteMaxRestConfig(id),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: [QueryKey.ROUTINE_DETAIL, routineId]
        })
    });
};


