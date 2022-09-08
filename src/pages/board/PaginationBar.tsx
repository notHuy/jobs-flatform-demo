import React from "react";
import { useSelector } from "react-redux";

import { Paper, TablePagination } from "src/components";
import { boardSelectors } from "src/slices/board";
import { boardSliceActions } from "src/slices/board";
import { useAppDispatch } from "src/types/redux";

const PaginationBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(boardSelectors.selectPage);
  const rowsPerPage = useSelector(boardSelectors.selectRowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(boardSliceActions.setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      boardSliceActions.setRowsPerPage(parseInt(event.target.value, 10))
    );

    dispatch(boardSliceActions.setPage(0));
  };

  return (
    <Paper sx={{ padding: "1rem" }} className="custom-paper-elevation">
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PaginationBar;
