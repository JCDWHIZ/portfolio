import Input from "../Fields/input";

function ProjectModal({
  isOpen,
  onClose,
  formdata,
  setFormdata,
  handleSubmit,
}: any) {
  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setFormdata({
        ...formdata,
        image: e.target.files[0],
      });
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-lightnavy p-6 rounded-lg w-[90%] max-w-lg shadow-lg relative h-[100vh] overflow-scroll">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green text-[20px] hover:underline"
        >
          Close
        </button>
        <div className="flex flex-col gap-4">
          {/* Title Input */}
          <Input label="Title" formdata={formdata} setFormdata={setFormdata} />

          {/* Technologies Input */}
          <Input
            label="Technologies"
            formdata={formdata}
            setFormdata={setFormdata}
          />

          {/* Github Link Input */}
          <Input
            label="Github Link"
            formdata={formdata}
            setFormdata={setFormdata}
          />

          {/* Demo Link Input */}
          <Input
            label="Demo Link"
            formdata={formdata}
            setFormdata={setFormdata}
          />

          {/* Description Input */}
          <Input
            label="Description"
            formdata={formdata}
            setFormdata={setFormdata}
          />

          {/* Image Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Image
            </label>
            <input
              type="file"
              accept="image/*" // Accept only image files
              onChange={handleImageChange}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Archive button */}
          <button
            className="mt-4 py-2 px-4 bg-green text-lightestslate rounded-lg hover:bg-green/90"
            type="submit"
            onClick={handleSubmit}
          >
            Archive
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectModal;
