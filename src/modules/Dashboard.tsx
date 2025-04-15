import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Archive from "@/components/Archive";
import Projects from "@/components/Projects";
import Input from "@/components/Fields/input";
import { useDashboard } from "@/hooks";

function Dashboard() {
  const { about, updateAbout, handleImageChange, formdata, setFormdata } =
    useDashboard();
  return (
    <div className="bg-lightnavy h-fit">
      <div className="">
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%]">
          <div className="mt-[10vh]">
            <h1 className="roboto md:text-[80px] lg:text-[90px] font-bold text-lightestslate sm:text-[35px]">
              Dashboard
            </h1>
          </div>

          <div className="">
            <div className="border-b border-green mt-[4vh] flex justify-between">
              <h1 className="roboto font-bold text-white pl-3 sm:text-[20px] md:text-[40px]">
                About
              </h1>{" "}
              <button
                onClick={updateAbout}
                className="text-green px-4 py-2 bg-lightnavy rounded-lg"
              >
                UpdateAbout
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-[4vh]">
              <Input
                label="Header"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.header}
              />
              <Input
                label="Technologies"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.technologies}
              />

              <Input
                label="Gmail Link"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.gmailLink}
              />

              <Input
                label="Github Link"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.githubLink}
              />

              <Input
                label="LinkedIn Link"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.linkedInLink}
              />
              <Input
                label="Description"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.description}
              />
              <Input
                label="Story"
                formdata={formdata}
                setFormdata={setFormdata}
                defaultValue={about?.[0]?.story}
              />

              <div className="flex flex-col gap-2">
                <h1 className="roboto font-bold text-lightestslate text-[20px]">
                  Image
                </h1>
                <div className="">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleImageChange(e);
                    }}
                  />
                  <img
                    src={`${formdata.image}`}
                    alt=""
                    className="h-[20vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <Archive />

          <Projects />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
