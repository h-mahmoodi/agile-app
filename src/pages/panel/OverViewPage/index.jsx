import React from "react";
import Box from "../../../components/Box";
import Flex from "../../../components/Flex";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";

function OverViewPage() {
  return (
    <section>
      <div className="bg-slate-900 p-3">
        <Flex justify="between" align="center">
          <Heading>Panel OverView</Heading>
          <Button
            btnStyle="indigo"
            size="md"
            className="flex items-center gap-3"
          >
            <span>Create Task</span>
            <i class="fi fi-rr-arrow-small-right flex"></i>
          </Button>
        </Flex>
      </div>
      <Flex gap="5">
        <Box className="w-1/5 ">
          <Flex justify="between" align="center">
            <Heading type="h4" className="">
              BackLog :
            </Heading>
            <Heading
              type="h4"
              className="bg-slate-700 py-1 px-2 rounded-md text-white"
            >
              23 Items
            </Heading>
          </Flex>
        </Box>
        <Box className="w-1/5 ">
          <Flex justify="between" align="center">
            <Heading type="h4" className="">
              ToDo :
            </Heading>
            <Heading
              type="h4"
              className="bg-slate-700 py-1 px-2 rounded-md text-white"
            >
              23 Items
            </Heading>
          </Flex>
        </Box>
        <Box className="w-1/5 ">
          <Flex justify="between" align="center">
            <Heading type="h4" className="">
              In Progress :
            </Heading>
            <Heading
              type="h4"
              className="bg-slate-700 py-1 px-2 rounded-md text-white"
            >
              23 Items
            </Heading>
          </Flex>
        </Box>
        <Box className="w-1/5 ">
          <Flex justify="between" align="center">
            <Heading type="h4" className="">
              Completed :
            </Heading>
            <Heading
              type="h4"
              className="bg-slate-700 py-1 px-2 rounded-md text-white"
            >
              23 Items
            </Heading>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
}

export default OverViewPage;
