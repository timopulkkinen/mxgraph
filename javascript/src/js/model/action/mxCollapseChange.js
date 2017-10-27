/**
 * Class: mxCollapseChange
 *
 * Action to change a cell's collapsed state in a model.
 *
 * Constructor: mxCollapseChange
 *
 * Constructs a change of a collapsed state in the
 * specified model.
 */
function mxCollapseChange(model, cell, collapsed)
{
	this.model = model;
	this.cell = cell;
	this.collapsed = collapsed;
	this.previous = collapsed;
};

/**
 * Function: execute
 *
 * Changes the collapsed state of <cell> to <previous> using
 * <mxGraphModel.collapsedStateForCellChanged>.
 */
mxCollapseChange.prototype.execute = function()
{
	this.collapsed = this.previous;
	this.previous = this.model.collapsedStateForCellChanged(
		this.cell, this.previous);
};
