interface ISampleViewObject {
  key1: string;
  key2: string;
}

export interface ISampleTask {
  step1: number;
  step2: string | null;
  step3: boolean;
  step4: ISampleViewObject | null;
}

export interface ISampleTask2 {
  step5: number;
  step6: string | null;
  step7: boolean;
}

export interface ISampleProcess {
  step1: number;
  step2: string | null;
  step3: boolean;
  step4: ISampleViewObject | null;
  step5: nnumber;
  step6: string | null;
  step7: boolean;
}
