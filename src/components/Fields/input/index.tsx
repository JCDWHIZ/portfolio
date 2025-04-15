function Input({
  label,
  formdata,
  setFormdata,
  defaultValue,
}: {
  label: string;
  formdata: any;
  setFormdata: any;
  defaultValue?: string | undefined;
}) {
  const param = label.toLocaleLowerCase().replace(" ", "");
  return (
    <div className="flex flex-col gap-2">
      <label className="roboto font-bold text-lightestslate text-[20px]">
        {label}
      </label>
      <input
        type="text"
        placeholder={label}
        value={formdata[param]}
        onChange={(e) => {
          setFormdata({
            ...formdata,
            [param]: e.target.value,
          });
        }}
        defaultValue={defaultValue}
        className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
      />
    </div>
  );
}

export default Input;
