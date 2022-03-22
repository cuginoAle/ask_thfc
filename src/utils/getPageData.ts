const dataKeys = ["user-name"];
interface PageData {
  acc: Record<string, string>;
  el: HTMLElement;
  index?: number;
}

interface BaseData {
  crn?: string;
  customer_id?: string;
  page_language: string;
}

const baseData = {
  crn: null,
  customer_id: null,
  page_language: navigator.language.split("-")[0],
};
export default () => {
  const dataDiv: HTMLDivElement = document.querySelector("#__za_data__");

  const data = Array.from(dataDiv.children).reduce<Record<string, string>>(
    (acc, el) => {
      const element = el as HTMLElement;
      const value = element.innerText;
      if (value) {
        acc[el.id] = value;
      }
      return acc;
    },
    {}
  );

  return { ...baseData, ...data };
};

export type { BaseData };
