interface BASE_DATA {
  crn?: string;
  customer_id?: string;
  page_language: string;
  login_status: "logged_in" | "guest";
}

const baseData: BASE_DATA = {
  crn: null,
  customer_id: null,
  page_language: navigator.language.split("-")[0],
  login_status: "guest",
};
export default (): BASE_DATA => {
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
  const { __user_name__, ...rest } = data;

  return {
    ...baseData,
    login_status: __user_name__ ? "logged_in" : "guest",
  };
};

export type { BASE_DATA };
