/* eslint-disable camelcase */

import { Exercise } from "components/Exercises/models/exercise";
import { BaseConfig, BaseConfigAdapter } from "components/WorkoutRoutines/models/BaseConfig";
import { RepetitionUnit } from "components/WorkoutRoutines/models/RepetitionUnit";
import { WeightUnit } from "components/WorkoutRoutines/models/WeightUnit";
import { Adapter } from "utils/Adapter";

export type SlotEntryType = 'normal' | 'dropset' | 'myo' | 'partial' | 'forced' | 'tut' | 'iso' | 'jump';

export class SlotEntry {

    id: number;
    slotId: number;
    exerciseId: number;
    repetitionUnitId: number;
    repetitionRounding: number;
    weightUnitId: number;
    weightRounding: number;
    order: number;
    comment: string;
    type: SlotEntryType;
    config: any | null;


    weightConfigs: BaseConfig[] = [];
    maxWeightConfigs: BaseConfig[] = [];
    repetitionsConfigs: BaseConfig[] = [];
    maxRepetitionsConfigs: BaseConfig[] = [];
    restTimeConfigs: BaseConfig[] = [];
    maxRestTimeConfigs: BaseConfig[] = [];
    nrOfSetsConfigs: BaseConfig[] = [];
    maxNrOfSetsConfigs: BaseConfig[] = [];
    rirConfigs: BaseConfig[] = [];
    maxRirConfigs: BaseConfig[] = [];

    exercise?: Exercise;
    repetitionUnit: RepetitionUnit | null = null;
    weightUnit: WeightUnit | null = null;


    constructor(
        data: {
            id: number,
            slotId: number,
            exerciseId: number,
            exercise?: Exercise,
            repetitionUnitId: number,
            repetitionRounding: number,
            weightUnitId: number,
            weightRounding: number,
            order: number,
            comment: string,
            type: SlotEntryType,
            config: any | null,
            configs?: {
                weightConfigs?: BaseConfig[],
                maxWeightConfigs?: BaseConfig[],
                repetitionsConfigs?: BaseConfig[],
                maxRepetitionsConfigs?: BaseConfig[],
                restTimeConfigs?: BaseConfig[],
                maxRestTimeConfigs?: BaseConfig[],
                nrOfSetsConfigs?: BaseConfig[],
                maxNrOfSetsConfigs?: BaseConfig[],
                rirConfigs?: BaseConfig[],
                maxRirConfigs?: BaseConfig[],
            }
        }
    ) {
        this.id = data.id;
        this.slotId = data.slotId;
        this.exerciseId = data.exerciseId;
        this.exercise = data.exercise;
        this.repetitionUnitId = data.repetitionUnitId;
        this.repetitionRounding = data.repetitionRounding;
        this.weightUnitId = data.weightUnitId;
        this.weightRounding = data.weightRounding;
        this.order = data.order;
        this.comment = data.comment;
        this.type = data.type;
        this.config = data.config;

        if (data.configs !== undefined) {
            this.weightConfigs = data.configs.weightConfigs ?? [];
            this.maxWeightConfigs = data.configs.maxWeightConfigs ?? [];
            this.repetitionsConfigs = data.configs.repetitionsConfigs ?? [];
            this.maxRepetitionsConfigs = data.configs.maxRepetitionsConfigs ?? [];
            this.restTimeConfigs = data.configs.restTimeConfigs ?? [];
            this.maxRestTimeConfigs = data.configs.maxRestTimeConfigs ?? [];
            this.nrOfSetsConfigs = data.configs.nrOfSetsConfigs ?? [];
            this.maxNrOfSetsConfigs = data.configs.maxNrOfSetsConfigs ?? [];
            this.rirConfigs = data.configs.rirConfigs ?? [];
            this.maxRirConfigs = data.configs.maxRirConfigs ?? [];
        }
    }

    get hasProgressionRules(): boolean {
        return this.weightConfigs.length > 1
            || this.maxWeightConfigs.length > 1
            || this.repetitionsConfigs.length > 1
            || this.maxRepetitionsConfigs.length > 1
            || this.restTimeConfigs.length > 1
            || this.maxRestTimeConfigs.length > 1
            || this.nrOfSetsConfigs.length > 1
            || this.maxNrOfSetsConfigs.length > 1
            || this.rirConfigs.length > 1
            || this.maxRirConfigs.length > 1;
    }
}


export class SlotEntryAdapter implements Adapter<SlotEntry> {
    fromJson = (item: any) => {
        const adapter = new BaseConfigAdapter();

        const configs = {
            weightConfigs: [],
            maxWeightConfigs: [],
            repetitionsConfigs: [],
            maxRepetitionsConfigs: [],
            restTimeConfigs: [],
            maxRestTimeConfigs: [],
            nrOfSetsConfigs: [],
            maxNrOfSetsConfigs: [],
            rirConfigs: [],
            maxRirConfigs: [],
        };
        if (Object.hasOwn(item, 'weight_configs')) {
            configs.weightConfigs = item.weight_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'max_weight_configs')) {
            configs.maxWeightConfigs = item.max_weight_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'repetitions_configs')) {
            configs.repetitionsConfigs = item.repetitions_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'max_repetitions_configs')) {
            configs.maxRepetitionsConfigs = item.max_repetitions_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'set_nr_configs')) {
            configs.nrOfSetsConfigs = item.set_nr_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'max_set_nr_configs')) {
            configs.maxNrOfSetsConfigs = item.max_set_nr_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'rest_configs')) {
            configs.restTimeConfigs = item.rest_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'max_rest_configs')) {
            configs.maxRestTimeConfigs = item.max_rest_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'rir_configs')) {
            configs.rirConfigs = item.rir_configs.map((config: any) => adapter.fromJson(config));
        }
        if (Object.hasOwn(item, 'max_rir_configs')) {
            configs.maxRirConfigs = item.max_rir_configs.map((config: any) => adapter.fromJson(config));
        }

        return new SlotEntry({
            id: item.id,
            slotId: item.slot,
            exerciseId: item.exercise,
            repetitionUnitId: item.repetition_unit,
            repetitionRounding: item.repetition_rounding,
            weightUnitId: item.weight_unit,
            weightRounding: item.weight_rounding,
            order: item.order,
            comment: item.comment,
            type: item.type,
            config: item.config,
            configs: configs
        });
    };

    toJson = (item: SlotEntry) => ({
        slot: item.slotId,
        exercise: item.exerciseId,
        repetition_unit: item.repetitionUnitId,
        repetition_rounding: item.repetitionRounding,
        weight_unit: item.weightUnitId,
        weight_rounding: item.weightRounding,
        order: item.order,
        comment: item.comment,
        type: item.type,
        config: item.config,
    });
}

export const slotEntryAdapter = new SlotEntryAdapter();