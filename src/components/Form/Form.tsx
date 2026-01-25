import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (q: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const hadnleSubmit = (formData: FormData) => {
    const query = formData.get("search") as string;
    if (!query) {
      console.log("Enter the search query");
      toast.error("Enter the search query");
      return;
    }

    onSubmit(query);
  };

  return (
    <form className={style.form} action={hadnleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
