import PostCard from "@/components/shared/PostCard";
import RSelect from "@/components/ui/select-input";

export default function Page() {
  return (
    <>
      <header className="mt-10 lg:mt-[3.75rem] border-b pb-[0.875rem] mb-[0.81rem] border-alice-blue max-w-[59.625rem]">
        <h1 className="text-2xl font-medium mb-[0.875rem] text-mako">
          Voice Feed
        </h1>
        <RSelect
          defaultValue="hot"
          options={["hot", "latest", "most liked"]}
          className="w-[4.9375rem] text-sm text-dove-gray border border-white-smoke-4 rounded-lg"
        />
      </header>
      <section>
        <div className="space-y-3 max-w-[43.625rem]">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <PostCard key={index} />
            ))}
        </div>
      </section>
    </>
  );
}
