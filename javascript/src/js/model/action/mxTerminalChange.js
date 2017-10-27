/**
 * Class: mxTerminalChange
 *
 * Action to change a terminal in a model.
 *
 * Constructor: mxTerminalChange
 *
 * Constructs a change of a terminal in the
 * specified model.
 */
function mxTerminalChange(model, cell, terminal, source)
{
	this.model = model;
	this.cell = cell;
	this.terminal = terminal;
	this.previous = terminal;
	this.source = source;
};

/**
 * Function: execute
 *
 * Changes the terminal of <cell> to <previous> using
 * <mxGraphModel.terminalForCellChanged>.
 */
mxTerminalChange.prototype.execute = function()
{
	this.terminal = this.previous;
	this.previous = this.model.terminalForCellChanged(
		this.cell, this.previous, this.source);
};
