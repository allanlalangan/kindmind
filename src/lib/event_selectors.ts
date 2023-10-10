export const self_care = ["exercise", "journaling", "grooming", "meditate"];

export const activities = [
  "art",
  "music",
  "tv",
  "games",
  "reading",
  "code",
  "shopping",
  "other",
];

export const work = ["job", "study", "clean", "errands"];

export const health = [
  "eat",
  "water",
  "caffeine",
  "junk_food",
  "smoke",
  "alcohol",
];

export interface Checkbox {
  id: string;
  value: string;
  checked: boolean;
  label: string;
  className?: string;
}

export interface Fieldset {
  name: string;
  checkboxes: Checkbox[];
}

export const self_care_fieldset: Fieldset = {
  name: "self_care",
  checkboxes: self_care.map((item) => ({
    id: item,
    value: item,
    checked: false,
    label: item,
  })),
};

export const activity_fieldset: Fieldset = {
  name: "activity",
  checkboxes: activities.map((item) => ({
    id: item,
    value: item,
    checked: false,
    label: item,
  })),
};

export const work_fieldset: Fieldset = {
  name: "work",
  checkboxes: work.map((item) => ({
    id: item,
    value: item,
    checked: false,
    label: item,
  })),
};

export const health_fieldset: Fieldset = {
  name: "health",
  checkboxes: health.map((item) => ({
    id: item,
    value: item,
    checked: false,
    label: item,
  })),
};
