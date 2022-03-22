import { BaseData } from "../utils/getPageData";
interface LOGIN extends BaseData {
  __user_name__?: string;
}
export default ({ __user_name__, ...rest }: LOGIN) => {
  window.dataLayer.push({
    event: "page_viewed",
    login_status: __user_name__ ? "logged_in" : "guest",
    ...rest,
  });
};
