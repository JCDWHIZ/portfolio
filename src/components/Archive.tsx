import { VscGithubAlt } from "react-icons/vsc";
import { MdDeleteForever } from "react-icons/md";
import { handleCreateArchive, handleDeleteArchive, useArchive } from "@/hooks";
import ArchiveModal from "./Modals/ArchiveModal";

function Archive() {
  const {
    archive,
    setArchive,
    formdata,
    setFormdata,
    isModalOpen,
    setIsModalOpen,
  } = useArchive();
  return (
    <div>
      <div className="">
        <div className="border-b border-green mt-[4vh] flex justify-between">
          <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
            Archive
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-green px-4 py-2 bg-lightnavy rounded-lg"
          >
            Create archive
          </button>
        </div>
        <ArchiveModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formdata={formdata}
          setFormdata={setFormdata}
          handleSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleCreateArchive(e, formdata, setIsModalOpen, setFormdata);
          }}
        />

        <div className="mt-[10vh]">
          <table className="w-full">
            <thead className="">
              <tr className="">
                <th className="roboto font-bold text-lightestslate text-[20px] text-left py-2 border-b border-green">
                  Title
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green">
                  Description
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green">
                  Technologies
                </th>
                <th className="roboto font-bold text-lightestslate text-[20px] text-left border-b border-green w-[6%]">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {archive?.map((item, index) => (
                <tr key={index}>
                  <td className="roboto text-[18px] font-bold text-white py-2">
                    {item.title}
                  </td>
                  <td className="roboto text-[18px] font-bold text-white py-2">
                    {item.description}
                  </td>
                  <td className="text-slate ">{item.technologies}</td>
                  <td className="flex gap-2 py-2">
                    {item.githubLink ? (
                      <a href={item.githubLink}>
                        <VscGithubAlt className="text-slate hover:text-green text-[23px]" />
                      </a>
                    ) : (
                      <h1>-</h1>
                    )}
                    <span
                      onClick={() =>
                        handleDeleteArchive(item._id, archive, setArchive)
                      }
                    >
                      <MdDeleteForever className="text-slate hover:text-green text-[23px]" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Archive;
