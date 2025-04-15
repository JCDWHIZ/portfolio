function ArchiveModal({
  isOpen,
  onClose,
  formdata,
  setFormdata,
  handleSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  formdata: any;
  setFormdata: any;
  handleSubmit: any;
}) {
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
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              value={formdata.title}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  title: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Technologies Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Technologies
            </label>
            <input
              type="text"
              placeholder="Technologies"
              value={formdata.technologies}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  technologies: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Github Link Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Github Link
            </label>
            <input
              type="text"
              placeholder="Github Link"
              value={formdata.githubLink}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  githubLink: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Demo Link Input */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Demo Link
            </label>
            <input
              type="text"
              placeholder="Demo Link"
              value={formdata.demoLink}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  demoLink: e.target.value,
                });
              }}
              className="py-2 px-4 hover:bg-green/10 border rounded-lg text-green border-green text-[18px] outline-none bg-transparent"
            />
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-2">
            <label className="roboto font-bold text-lightestslate text-[20px]">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={4}
              value={formdata.description}
              onChange={(e) => {
                setFormdata({
                  ...formdata,
                  description: e.target.value,
                });
              }}
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

export default ArchiveModal;
